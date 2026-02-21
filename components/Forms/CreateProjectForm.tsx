"use client";

import { Card, Label, TextInput, Textarea, FileInput } from "flowbite-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginButton } from "../Buttons";
import { supabase } from "@/lib/supabase";

interface CreateProjectFormProps {
  className?: string;
}

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({ className }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<FileList | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const imageUrls: string[] = [];

      if (images && images.length > 0) {
        for (const file of Array.from(images)) {
          const fileName = `${Date.now()}-${file.name}`;

          const { error: uploadError } = await supabase.storage
            .from("Images")
            .upload(fileName, file);

          if (uploadError) throw uploadError;

          const { data: urlData } = supabase.storage
            .from("Images")
            .getPublicUrl(fileName);

          imageUrls.push(urlData.publicUrl);
        }
      }

      const { data, error: insertError } = await supabase
        .from("projects")
        .insert({
          title,
          description,
          images_url: imageUrls,
        })
        .select();

      console.log("data:", data);
      console.log("error:", insertError);

      if (insertError) throw insertError;

      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <Card>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <Label>Title</Label>
            <TextInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the Title"
            />
            <Label>Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter the description"
            />
            <Label>Images</Label>
            <FileInput
              accept="image/png, image/jpeg"
              multiple
              onChange={(e) => setImages(e.target.files)}
            ></FileInput>
            <LoginButton className="mt-4">Submit</LoginButton>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateProjectForm;

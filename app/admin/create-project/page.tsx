import { supabase } from "../../../lib/supabase";
import CreateProjectForm from "@/components/Forms/CreateProjectForm";

const CreateProjectPage = async () => {
  const { data, error } = await supabase.from("projects").select("*");

  return (
    <div className="grid">
      <div className="max-h-md mt-8 grid place-items-center">
        <CreateProjectForm className=""></CreateProjectForm>
      </div>
    </div>
  );
};

export default CreateProjectPage;

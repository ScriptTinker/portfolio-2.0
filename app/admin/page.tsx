import { supabase } from "../../lib/supabase";
import { LinkButton } from "@/components/Buttons";

const AdminPage = async () => {
  const { data, error } = await supabase.from("projects").select("*");

  return (
    <div className="mt-8 grid">
      <div className="max-w-md place-items-center">
        <LinkButton href="/admin/create-project">Create Project</LinkButton>
      </div>
    </div>
  );
};

export default AdminPage;

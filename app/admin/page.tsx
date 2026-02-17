import { supabase } from "../../lib/supabase";

const AdminPage = async () => {
  const { data, error } = await supabase.from("projects").select("*");
  console.log("Data:", data);
  console.log("Error:", error);

  return <div>check the console for data and error</div>;
};

export default AdminPage;

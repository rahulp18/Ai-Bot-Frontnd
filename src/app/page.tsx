import EditMode from "@/components/EditMode";
import LogoutButton from "@/components/LogoutButton";
import Procedure from "@/components/Procedure";
import UserForm from "@/components/UserForm";
import api from "@/config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomePage = async ({ searchParams }: { searchParams:Promise<any>}) => {
  const { editMode } = await searchParams;
  const { data } = await api.get("/github/auth/me");

  if (!data) {
    return (
      <div className="">
        <h1 className="">Invalid Session token</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-8 md:px-4 py-2 flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="font-normal">Welcome</span> {data?.username}
        </h1>
        <div className="flex flex-row gap-x-5">
          <EditMode />
          <LogoutButton />
        </div>
      </div>
      <div className="my-5   flex-1 flex flex-col items-center justify-center">
        {editMode !== "true" ? (
          <div>
            <Procedure userId={data?.id} />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <UserForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

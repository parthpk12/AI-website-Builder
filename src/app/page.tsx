import { prisma } from "@/lib/db";

const Page = async () => {

  let posts = await prisma.post.findMany();
  // console.log(users);

  return (
    <>
      <div className="font-bold bg-green-200 p-2 text-2xl">
        Home Page <br />
        {
          JSON.stringify(posts)
        }
      </div>

    </>
  )
};

export default Page;

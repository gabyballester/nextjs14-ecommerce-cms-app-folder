import SizeForm from "./components/size-form";
import { findSizeById } from "@/services";

const CreateSizePage = async ({ params }: { params: { sizeId: string } }) => {
  const sizes = await findSizeById({
    sizeId: params.sizeId,
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={sizes} />
      </div>
    </div>
  );
};

export default CreateSizePage;

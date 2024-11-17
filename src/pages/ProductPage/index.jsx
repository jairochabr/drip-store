import { Loading } from "@/components/Loading";
import Filter from "./Filter";
import { PageContainer, ProductContent } from "./style";

export function ProductPage() {
  return (
    <>
      <Loading />
      <PageContainer>
        <Filter />
        <ProductContent></ProductContent>
      </PageContainer>
    </>
  );
}

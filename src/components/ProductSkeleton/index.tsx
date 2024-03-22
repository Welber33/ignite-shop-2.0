import { ComponentProps } from "react";
import { ProductSkeletonContainer, SkeletonItem } from "./styles";

type ProductSkeletonContainerProps = ComponentProps<typeof ProductSkeletonContainer>

export function ProductSkeleton({...props }: ProductSkeletonContainerProps) {
  return (
    <ProductSkeletonContainer {...props}>
      <SkeletonItem />
      <div>
        <SkeletonItem />
        <SkeletonItem />
      </div>
    </ProductSkeletonContainer>
  )
}
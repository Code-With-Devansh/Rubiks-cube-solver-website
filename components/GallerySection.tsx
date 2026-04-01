import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import ImageGrid from "./ImageGrid";

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery">
      <SectionLabel
        tag="07 / GALLERY"
        title="Build Gallery"
        subtitle="Competition, hardware build, and live demos."
      />

      <div className="section-reveal">
        <ImageGrid />
      </div>

    </SectionWrapper>
  );
}

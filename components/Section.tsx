import Container from "./Container";

export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-40">
      <Container>
        {children}
      </Container>
    </section>
  );
}
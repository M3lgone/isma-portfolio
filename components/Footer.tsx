import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-20">
      <Container>
        <div className="text-center text-sm text-[#a9b1d6]/50">
          <p>© {new Date().getFullYear()} Isma.dev</p>
        </div>
      </Container>
    </footer>
  );
}
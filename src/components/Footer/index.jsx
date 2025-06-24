import './styles.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer" className="bg-black text-light text-center pt-3">
      <div id="medias">
        <div id="description" className="d-flex flex-column align-items-center justify-content-center m-auto my-2">
          <p >&#169; {currentYear}</p>
        </div>
      </div>
    </section>
  );
}
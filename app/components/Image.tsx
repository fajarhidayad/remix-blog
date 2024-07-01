export default function Image(props: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} className="rounded-xl" />
      <figcaption className="mt-4 text-center text-xs">
        {props.caption}
      </figcaption>
    </figure>
  );
}

import Link from "next/link";

export default function About() {
    return (
      <div>
        <p>About page</p>
        <Link href="/about/contacts">contacts</Link>
        <Link href="/about/team">team</Link>
      </div>
    );
}

import { Link } from "@remix-run/react";
import type { MemberID } from "~/data/members";
import { getMemberDescription, getMemberName } from "~/data/members";
import { getMemberImage, memberIDs } from "~/data/members";

function Member({ id }: { id: MemberID }) {
  return (
    <div className="m-8 flex flex-col items-center justify-center">
      <img
        className="mb-4 h-60 w-60 rounded-full"
        src={getMemberImage(id)}
        alt="Member"
      />
      <span className="mb-4 text-lg">{getMemberName(id)}</span>
      <span className="w-64 text-center text-sm">
        {getMemberDescription(id)}
      </span>
    </div>
  );
}

export default function Index() {
  return (
    <main className="flex flex-col items-center">
      <nav className="flex w-full justify-between p-2">
        <h2>Økonomisk Loge</h2>
        <div className="space-x-4">
          <Link to="galleri">Galleri</Link>
          <Link to="galleri">Kalender</Link>
          <Link to="galleri">Hvilken hund er du?</Link>
        </div>
      </nav>
      <img className="my-16 w-80" src="logo-front-page.png" alt="logo" />
      <section className="bg-slate-200 flex flex-col justify-center">
        <h3 className="text-4xl text-center mt-8">Medlemmer</h3>
        <div className="mb-8 flex flex-wrap items-start justify-center">
          {memberIDs.map((id) => (
            <Member key={id} id={id} />
          ))}
        </div>
      </section>
    </main>
  );
}

import LoginForm from "./LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined> | undefined>;
}) {
  const sp = (await searchParams) as
    | Record<string, string | string[] | undefined>
    | undefined;
  const rawName = sp?.name;
  const name = Array.isArray(rawName) ? rawName[0] : rawName;

  return <LoginForm name={name} />;
}

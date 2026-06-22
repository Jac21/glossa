import { APP_VERSION } from "../lib/version";

export default function Version() {
  return <span className="text-sm text-gray-500">v{APP_VERSION}</span>;
}

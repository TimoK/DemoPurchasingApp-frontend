function getBaseUrl() {
  const isDev = process.env.NODE_ENV === "development";

  return isDev
    ? "https://localhost:7244"
    : "https://demopurchasingappbackend20231208091324.azurewebsites.net";
}

export const BUY_PROCEDURES_URL = getBaseUrl() + "/buyprocedures";

export const JSON_HEADER = { "Content-Type": "application/json" };

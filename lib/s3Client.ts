import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  endpoint: "https://nos.jkt-1.neo.id",
  region: process.env.NEXT_PUBLIC_S3_REGION,
  credentials: {
    accessKeyId: "3492e861c77097dceec2",
    secretAccessKey: "XxVZDvk4t2S0b8fVhHhsDj6xjq+FjNjX9Ac0pTo1",
  },
});
export const Bucket = process.env.S3_BUCKET_NAME;

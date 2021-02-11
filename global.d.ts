declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    /** 現在の Node.js 実行環境 */
    readonly NODE_ENV: 'development' | 'production' | 'test';

    /** AWS アクセスキー */
    readonly AWS_ACCESS_KEY: string;
    /** AWS シークレットキー */
    readonly AWS_SECRET_KEY: string;
    /** AWS S3 バケット名 */
    readonly AWS_S3_BUCKET_NAME: string;
  }
}

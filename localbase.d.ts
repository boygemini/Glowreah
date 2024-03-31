"use client";

declare module "localbase" {
  interface Localbase {
    collection(collectionName: string): Collection;
    config(debug?: boolean): void;
  }

  interface Collection {
    add(data: any): Promise<any>;
    get(): Promise<any>;
    doc(id: string): Document;
  }

  interface Document {
    set(data: any): Promise<any>;
    update(data: any): Promise<any>;
    delete(): Promise<any>;
  }

  const localbase: {
    new (databaseName: string): Localbase;
  };

  export default localbase;
}

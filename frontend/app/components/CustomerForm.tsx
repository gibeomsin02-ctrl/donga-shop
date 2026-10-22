"use client";

import { useState, type FormEvent } from "react";

type Customer = {
  name: string;
  email: string;
  product: string;
};

export default function CustomerForm({ products }: { products: string[] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState(products[0] ?? "");
  const [submitted, setSubmitted] = useState<Customer | null>(null);

  // 지금은 서버 없이 입력값을 화면에만 보여준다
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted({ name, email, product });
  }

  return (
    <section className="mx-auto w-full max-w-md px-6 py-12">
      <h2 className="mb-6 text-2xl font-bold text-zinc-900">고객 등록</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700">
          이름
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded border border-zinc-300 px-3 py-2 text-base text-zinc-900"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700">
          이메일
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded border border-zinc-300 px-3 py-2 text-base text-zinc-900"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700">
          관심 상품
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="rounded border border-zinc-300 bg-white px-3 py-2 text-base text-zinc-900"
          >
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="mt-2 rounded bg-blue-900 px-4 py-2 font-semibold text-white hover:bg-blue-800"
        >
          등록하기
        </button>
      </form>

      {submitted && (
        <div className="mt-6 rounded border border-blue-200 bg-blue-50 p-4 text-zinc-800">
          <p className="mb-2 font-semibold">등록된 정보</p>
          <p>이름: {submitted.name}</p>
          <p>이메일: {submitted.email}</p>
          <p>관심 상품: {submitted.product}</p>
        </div>
      )}
    </section>
  );
}

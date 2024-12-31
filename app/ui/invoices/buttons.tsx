import { deleteInvoice } from "@/app/lib/action";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreateInvoice() {
    return (
        <Link
            href="/dashboard/invoices/create"
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Create Invoice</span>{" "}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function UpdateInvoice({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/invoices/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

export function DeleteInvoice({ id }: { id: string }) {
    // deleteInvoiceWithIdは、deleteInvoice関数を呼び出すための新しい関数です。
    // bindを使うことで、deleteInvoiceの最初の引数 "id" を固定し、
    // 実行される準備ができた状態の関数を作成しています。
    //
    // 直接 deleteInvoice(id) を action に渡すと、関数がすぐに実行されてしまい、
    // 戻り値（有効なURLでない値）が action に渡されてしまうため動作しません。
    //
    // ここでは、bindを使って後から実行可能な関数を作り、それをactionに渡しています。
    const deleteInvoiceWithId = deleteInvoice.bind(null, id);
    return (
        <>
            <form action={deleteInvoiceWithId}>
                <button className="rounded-md border p-2 hover:bg-gray-100">
                    <span className="sr-only">Delete</span>
                    <TrashIcon className="w-5" />
                </button>
            </form>
        </>
    );
}

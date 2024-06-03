"use client";

import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

function ButtonAction({ blogId }) {
  return (
    <div className="mt-5">
      <div className="flex gap-4">
        <Link
          href={`/blog/editPost/${blogId}`}
          className="flex items-center btn "
        >
          <Pencil />
          Edit
        </Link>
        <button
          className="btn btn-error"
          onClick={() => document.getElementById("deleteModal").showModal()}
        >
          <Trash2 />
          Delete
        </button>
      </div>
      <dialog id="deleteModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Are u sure u wanna delete this Post ?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">NO</button>
            </form>
            <form method="dialog">
              <button className="btn btn-error">YES</button>
            </form>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
export default ButtonAction;

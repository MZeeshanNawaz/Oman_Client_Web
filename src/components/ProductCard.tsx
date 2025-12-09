import React from "react";
import { ProductCardProps } from "../types/index";

const NAVY = "#1e3a8a";

export default function ProductCard({ product, onDelete }: ProductCardProps) {
  const { title, image, phone, author, id, email } = product;

  // Admin delete button visible if onDelete is passed
  const isAdmin = !!onDelete;

  // Contact defaults
  const displayPhone = phone  || "+968 98164264";
  const displayEmail = email || "saeedraja830@gmail.com";

  return (
    <div className="card shadow-sm h-100">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body text-center d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold">{title}</h5>

          {author && (
            <p className="text-muted small mb-1">
              <i className="fa-regular fa-circle-user"></i> {author}
            </p>
          )}

          <p className="text-muted small mb-1">
            <i className="fa-solid fa-phone"></i> {displayPhone}
          </p>

          <p className="text-muted small mb-3">
            <i className="fa-regular fa-envelope"></i> {displayEmail}
          </p>
        </div>

        {isAdmin && (
          <button
            className="btn btn-sm"
            style={{ backgroundColor: NAVY, color: "#fff", borderRadius: "5px" }}
            onClick={() => {
              if (confirm("Delete this product?")) onDelete(String(id));
            }}
          >
            <i className="fa-solid fa-trash me-2"></i> Delete
          </button>
        )}
      </div>
    </div>
  );
}

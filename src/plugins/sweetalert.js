import Swal from "sweetalert2";

export const AlertInfo = Swal.mixin({
  title: "Opss!",
  icon: "info",
  confirmButtonText: "Ok"
});

export const AlertError = Swal.mixin({
  title: "Opss!",
  icon: "error",
  confirmButtonText: "Ok"
});

export const AlertSuccess = Swal.mixin({
  title: "Yeyy!",
  icon: "success",
  confirmButtonText: "Ok"
});

export const AlertWarning = Swal.mixin({
  title: "Opss!",
  icon: "warning",
  confirmButtonText: "Ok"
});

export const ConfirmWarning = Swal.mixin({
  title: "Anda yakin?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Ya",
  cancelButtonText: "Batal"
});

export const RedConfirmWarning = Swal.mixin({
  title: "Anda yakin?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Ya",
  cancelButtonText: "Batal",
  confirmButtonColor: "#d33",
  cancelButtonColor: "#3085d6"
});

export const ConfirmInfo = Swal.mixin({
  title: "Konfirmasi",
  icon: "info",
  showCancelButton: true,
  confirmButtonText: "Lanjut",
  cancelButtonText: "Kembali"
});

export const AlertLoading = Swal.mixin({
  title: "Mohon Tunggu...",
  // imageUrl: testLoading,
  showConfirmButton: false,
  allowOutsideClick: false
});

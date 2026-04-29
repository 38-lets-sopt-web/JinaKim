// 모달 공통
export const openModal = (modalId) => {
  const modal = document.querySelector(`#${modalId}`);
  modal.classList.remove("hidden");
};

export const closeModal = (modalId) => {
  const modal = document.querySelector(`#${modalId}`);
  modal.classList.add("hidden");
};

export const initModalEvents = () => {
  const modalOpenButtons = document.querySelectorAll("[data-modal-open]");
  const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
  const modals = document.querySelectorAll(".modal");

  modalOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openModal(button.dataset.modalOpen);
    });
  });

  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      closeModal(button.dataset.modalClose);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal.id);
      }
    });
  });
};

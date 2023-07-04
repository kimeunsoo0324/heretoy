// 새로 작성한 글에 css 적용해야 함, 하트 버튼도 적용해야 함(배경 색은 랜덤으로 하는지?)
// 본인이 작성한 글에는 수정 버튼, 삭제 버튼 생성해야 함

window.onload = () => {
    const likeButtons = document.querySelectorAll('.fa-regular.fa-heart');

    likeButtons.forEach((like) => {
        const ggimButton = like.parentElement;

        ggimButton.style.background = 'none';
        like.classList.remove("fa-solid");

        ggimButton.addEventListener("click", (e) => {
            like.classList.toggle("fa-solid");
        });
    });
}
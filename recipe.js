// 새로 작성한 글에 css 적용해야 함, 하트 버튼도 적용해야 함(배경 색은 랜덤으로 하는지?)

// window.onload = () => {
//     const likeButtons = document.querySelectorAll('.fa-regular.fa-heart');

//     likeButtons.forEach((like) => {
//         const ggimButton = like.parentElement;

//         ggimButton.style.background = 'none';
//         like.classList.remove("fa-solid");

//         ggimButton.addEventListener("click", (e) => {
//             like.classList.toggle("fa-solid");
//         });
//     });
// }


window.onload = () => {
    const writeButton = document.getElementById("write");

    writeButton.addEventListener("click", () => {
        const newWindow = window.open("", "_blank", "width=600,height=400");

        newWindow.document.write(`
            <h2>나만의 레시피 작성하기</h2>
            <label for="name">이름:</label>
            <input type="text" id="name" placeholder="이름을 입력하세요"><br><br>

            <label for="fruitCombination">과일 조합:</label>
            <input type="text" id="fruitCombination" placeholder="과일 조합을 입력하세요"><br><br>

            <label for="content">본문 내용:</label><br>
            <textarea id="content" rows="6" cols="40" placeholder="본문 내용을 입력하세요"></textarea><br><br>

            <button type="button" id="confirm">확인</button>
        `);

        const confirmButton = newWindow.document.getElementById("confirm");

        confirmButton.addEventListener("click", () => {

            const name = newWindow.document.getElementById("name").value;
            const fruitCombination = newWindow.document.getElementById("fruitCombination").value;
            const content = newWindow.document.getElementById("content").value;

            const newPost = document.createElement("div");
            newPost.innerHTML = `
                <br><h3 id="name">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${name}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a id="swurecipe">&nbsp&nbsp&nbsp&nbsp${fruitCombination}&nbsp&nbsp&nbsp&nbsp</a></h3>
                <br><h3 id="post">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${content}</h3>
                <div class="toggle"><button id="ggim"><i class="fa-regular fa-heart fa-solid fa-heart"></i></button></div>
                <button class="edit">수정</button>
                <button class="delete">삭제</button>
            `;

            const section = document.getElementById("section");
            section.appendChild(newPost);

            newWindow.close();
        });
    });

    const section = document.getElementById("section");
    section.addEventListener("click", (e) => {
        if (e.target.classList.contains("edit")) {
        
            const post = e.target.parentNode;
            // TODO: 수정 기능 구현

        } else if (e.target.classList.contains("delete")) {
            
            const post = e.target.parentNode;
            // TODO: 삭제 기능 구현
        }
    });

    const likeButtons = document.querySelectorAll('.fa-regular.fa-heart');
            
    likeButtons.forEach((like) => {
        const ggimButton = like.parentElement;

        ggimButton.style.background = 'none';
        like.classList.remove("fa-solid");

        ggimButton.addEventListener("click", (e) => {
            like.classList.toggle("fa-solid");
        });
    });

};
const pathName = window.location.pathname
window.addEventListener("load", () => {
    // get all cards
    const cards = document.querySelectorAll(`div.card`);
    for (const card of cards) {
        // delete books
        card
            .querySelector(`button#delete-${card.dataset.id}`)
            .addEventListener("click", (e) => {
                e.preventDefault();
                fetch(`${pathName}/api/delete?id=${card.dataset.id}`, {
                    method: "get",
                })
                    .then(() => {
                        window.location.reload();
                    })
                    .catch((e) => console.error(e));
            });

        //    update books
        card.querySelector(`button#update-${card.dataset.id}`).addEventListener(
            "click",
            (e) => {
                e.preventDefault();
                const input = card.querySelector("p");
                input.contentEditable = "true";
                input.focus();
                const button = e.currentTarget;
                button.innerText = "Save";
                button.addEventListener("click", (e) => {
                    e.preventDefault();
                    fetch(
                        `${pathName}/api/update?id=${card.dataset.id}&bookName=${input.innerText}`,
                        {
                            method: "get",
                        }
                    )
                        .then(() => {
                            window.location.reload();
                        })
                        .catch((e) => console.error(e));
                });
            },
            {once: true}
        );
    }

    // insert books
    document
        .querySelector("button#insert-book")
        .addEventListener("click", (e) => {
            e.preventDefault();
            const input = document.getElementById("bookName");
            fetch(`${pathName}/api/insert?name=${input.value}`, {
                method: "get",
            })
                .then(() => {
                    window.location.reload();
                })
                .catch((e) => console.error(e));
        });

    //  update books
});

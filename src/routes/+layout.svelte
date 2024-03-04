<div>
    <slot/>
</div>

<style>
    :global(body) {
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        display: grid;
        place-content: center;
        font-family: "Poppins", sans-serif;
        min-height: 100vh;
        margin: 0 auto;
        padding: 0;
        background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(201,201,201,1) 0%, rgba(255,255,255,1) 35%, rgb(179, 242, 255) 100%);
        box-sizing: border-box;
    }

    :global(h1, h2, h3, h4) {
        margin: 0;
    }

    div {
        aspect-ratio: 9 / 16;
        width: 400px;
        max-width: 100%;
        display: block;
        padding: 30px;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
</style>
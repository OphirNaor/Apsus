
export default {
    template: `
    <header class="app-header">
        <nav>
            <section>
                <router-link to="/" active-class="active-link">
                    <div class="logo">
                        <h3>Apsus</h3>
                        <i class="fa-solid fa-house"></i>
                    </div>
                </router-link>
            </section>
            <section class = "nav-links">
                <router-link active-class="active" class="header-link" to="/mail">Mail </router-link>|
                <router-link class="header-link" to="/note">Keep</router-link>|
                <router-link class="header-link" to="/book">Books</router-link>
</section>
        </nav>
    </header>
    `,
}
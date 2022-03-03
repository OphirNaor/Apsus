
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
            <section class="search-container">
                    <input class="search" autocomplete="off" placeholder="Search..."  type="text" @input="search">
                    <i class="fas fa-search icon" ></i>
       
                
</section>
        </nav>
    </header>
    `,
}
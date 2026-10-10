import MenuCounter from "./MenuCounter";

export default function MenuLayout({ children }) {
  return (
    <div className= "menu-layout">
        <aside className="category-sidebar">
            <h2>Categories</h2>
            <ul>
                <li>Main Courses</li>
                <li>Side Dishes</li>
                <li>Desserts</li>
                <li>Beverages</li>
            </ul>

            <MenuCounter />
        </aside>
        <section className="menu-content">
            {children}
        </section>
    </div>
  );
}
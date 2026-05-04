import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import { useSearch } from "./hooks/useSearch";
import { members } from "./member";

function App() {
  const { search, filteredData, handleSearchChange, handleSearchClick } =
    useSearch(members);

  return (
    <>
      <Header />
      <Search
        search={search}
        onSearchChange={handleSearchChange}
        onSearchClick={handleSearchClick}
      />
      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredData.map((member) => (
          <Card key={member.id} {...member} />
        ))}
      </section>
    </>
  );
}

export default App;

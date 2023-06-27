import { useState } from "react";

export default function App() {

  // let [planets,setPlanets] = useState(["Mercury","Venus","Earth"]);

  let [planets, setPlanets] = useState(
    [
      {
        id: 1,
        name: "Mercury",
        diameter: 3526725
      },
      {
        id: 2,
        name: "Venus",
        diameter: 862862
      },
      {
        id: 3,
        name: "Earth",
        diameter: 894368
      }
    ]
  )

  const [newPlanets, setNewPlanets] = useState({
    id: planets.length + 1,
    name: "",
    diameter: 0
  });

  // const elements = planets.map((planet,i) => <h3 key={i}>{planet}</h3>)

  return (
    // <div>
    //   <h1>{elements}</h1>
    //   <button onClick={() => setPlanets(["Mars",...planets])}>Tambah depan</button>
    //   <button onClick={() => setPlanets([...planets,"Yupiter"])}>Tambah Belakang</button>

    //   <button onClick={() => planets.map((planet,i) => planet.i === 1 ? [...planet,"Neptunus"]: planet)}>Ubah</button>

    //   <button onClick={() => setPlanets([])}>Hapus semua</button>
    // </div>

    <div>
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Diameter</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          {
            planets.map((planet,i) => (
              <tr key={i}>
                <td>{planet.id}</td>
                <td>{planet.name}</td>
                <td>{planet.diameter}</td>
                <td>
                  <button>Tambah</button>
                  <button>Hapus</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <form action="" onSubmit={(e) => {
        e.preventDefault();
        setPlanets([...planets, newPlanets])
      }}>
        <label htmlFor="">
          ID
          <input type="number" value={newPlanets.id} onChange={(e) => setNewPlanets({ id: e.target.value })} />
        </label>
        <label htmlFor="">
          Nama
          <input type="text" value={newPlanets.name} onChange={(e) => setNewPlanets({ name: e.target.value })} />
        </label>
        <label htmlFor="">
          Diameter
          <input type="number" value={newPlanets.diameter} />
        </label>
        <button>Tambah</button>
      </form> */}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Diameter</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, i) => (
            <tr key={i}>
              <td>{planet.id}</td>
              <td>{planet.name}</td>
              <td>{planet.diameter}</td>
              <td>
                <button>Edit</button>
                <button>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPlanets([...planets, newPlanets]);
          setNewPlanets({ ...newPlanets, id: newPlanets.id + 1 });
        }}
      >
        <label>
          ID
          <input
            type="text"
            value={newPlanets.id}
            onChange={(e) => setNewPlanets({ ...newPlanets, id: e.target.value })}
          />
        </label>
        <label>
          Nama
          <input
            type="text"
            onChange={(e) =>
              setNewPlanets({ ...newPlanets, name: e.target.value })
            }
          />
        </label>
        <label>
          Diameter
          <input
            type="number"
            onChange={(e) =>
              setNewPlanets({ ...newPlanets, diameter: e.target.value })
            }
          />
        </label>
        <button>Tambah</button>
      </form>
    </div>
  )
}
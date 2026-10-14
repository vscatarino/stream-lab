import TitleCard from "../title-card/TitleCard";
export default function Row(){
    const label = "Em alta agora";
    const titles = [0,1,2];
    return(
      <section className="row">
       <h2 className="row-label">{label}</h2>
        <div className="row-track">
          {titles.map((_, index) => (
            <TitleCard key={index}/>
          ))}
        </div>
      </section>  
    )
}
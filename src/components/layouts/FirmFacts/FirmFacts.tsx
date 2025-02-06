import FirmFactCard from "../../organisms/FirmFactCard/FirmFactCard"
import "./FirmFacts.scss"
const FirmFacts = () => {
  return (
    <div className="firm-facts-layout">
      <h1>Firm Facts</h1>
      <hr />
      <div>
        {Array.from({ length: 7 }).map((_, index) => (
          <div className={`div${index+1}`}>
            <FirmFactCard />
          </div>        
        ))}
      </div>
    </div>
  )
}

export default FirmFacts
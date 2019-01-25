import React from 'react'
import Topic from './Topic';
const card =[{
    image:'https://www.itesoft.com/wp-content/uploads/2018/07/blockchain.jpg',
    avatar:'22',
    desc:'BLOCKCHAIN'

},
{
    image:'https://zdnet1.cbsistatic.com/hub/i/r/2017/10/23/b6c8ffda-7e57-4a26-8c7e-e19aa89118ae/resize/770xauto/6d1493a863899d6f63ec00f840354c26/news-networking-iot-city-istock.png',
    avatar:'33',
    desc:'IOT'

},
{
    image:'https://internetofbusiness.com/wp-content/uploads/2018/07/IoT-in-energy-640x360.jpg',
    avatar:'44',
    desc:'ENERGY'

},{
    image:'https://www.extremetech.com/wp-content/uploads/2015/09/sat-ai-head-640x353.jpg',
    avatar:'22',
    desc:'AI'

},
{
    image:'https://sashdujour.com/wp-content/uploads/2017/12/INDUSTRY.jpg',
    avatar:'33',
    desc:'INDUSTRY'

},
{
    image:'http://9tixb2v94ky1cp8qg3l1k4ba.wpengine.netdna-cdn.com/wp-content/uploads/2016/07/SEO-for-Non-Profit-Organizations.png',
    avatar:'44',
    desc:'NON-PROFIT'

},{
    image:'https://www.aseanbriefing.com/news/wp-content/uploads/2018/08/ASEAN-Briefing-Singapores-Rising-Fintech-Sector-002.jpg',
    avatar:'33',
    desc:'FINTECH'

},
{
    image:'https://media.istockphoto.com/vectors/big-data-background-vector-illustration-information-streams-future-vector-id627427636?k=6&m=627427636&s=612x612&w=0&h=iBPKKuHjCqDZ5h1L4NmbloERo7VzWzATx_ZIeyYj0sU=',
    avatar:'44',
    desc:'BIGDATA'

}];

export default function Topics() {

  return (
    <div className="top-topics" style={{display:'flex',flexWrap:'wrap',justifyContent:'center',backgroundColor:'#00939E',padding:'5%'}}>
    {card.map(el => (
          <Topic topic={el} />
        ))}

    </div>
  )
}

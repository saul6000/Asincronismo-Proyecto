const descripcion = document.querySelector('.Description');
const sobre = document.querySelector('.About');
const proyectos = document.querySelector('.Projects');
const contactos = document.querySelector('.Contact');

descripcion.innerText=`Mi nombre es Saul Mendoza y soy de Ecuador 
me preparo para mejorar como development`;
const About2 = ()=>{window.location = 'https://saul6000.github.io/Asincronismo-Proyecto/about.html';return ;};
const Proyects = ()=>{window.location = 'https://saul6000.github.io/Asincronismo-Proyecto/proyects.html';return ;};
const Contact = ()=>{ window.location = 'https://saul6000.github.io/Asincronismo-Proyecto/contacts.html';return ;};
sobre.addEventListener('click',About2);
proyectos.addEventListener('click',Proyects);
contactos.addEventListener('click',Contact);
const content = null || document.querySelector('#content');
//CODIGO DE GET DE LA API ///
const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC3mdvPT--C7MEgkB2bYyPRQ&hl=en&gl=US'
const Obtener = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c84c8900emsh68e3a80d3e24947p17e858jsn39f9c2d9cdf0',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

const fetchdata = async (urlApi) =>{
const response = await fetch(urlApi,Obtener);
const data =await response.json();
return data;
};
(async ()=>{
 try{
    const videos = await fetchdata(API);
    //console.log(videos);
    console.log(videos.contents);
    let view =`
    ${videos.contents.map(video => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.video.thumbnails[0].url}" alt="" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.video.title}
      </h3>
    </div>
  </div>
    `).slice(0,10).join('')}     
`;
    content.innerHTML=view;
 }catch(error){
   console.log(error)
 }finally{
    console.log(`El evento se cumplio`)
 }
})();


const testimonials = [
	{
		name: "SHUBHAM BALDAVA",
		job: "Ticket Jugaad",
		image: "https://www.ecell-iitkgp.org/empresario/wp-content/uploads/images/tj.jpg",
		testimonial:
            "Participating in Empresario helped us think critically about virtually every aspect of our startup. Right from our target market and its size, our competitors to scalability of our product etc. This helped us to take a step back and assess our startup with a level of detail one might have overlooked on daily basis. Empresario helped us in Networking and build connections with the judges, investors and entrepreneurs,who at later stages helped us a lot whenever we faced some problems."
	},
	{
		name: "SHARYN POTTER",
		job: "Soteria Solutions",
		image: "https://www.ecell-iitkgp.org/empresario/wp-content/uploads/images/soteria.jpg",
		testimonial:
            "Mind blown, Empresario was the best B-Plan competition out of the 8 we have been selected in. The judges asked critical questions and made sure that it wasn't an easy process. After the competition and before the result, all the judges interacted with us.The mentoring we received at the Microsoft campus was class apart and gave us a US based perspective on how to run a business, besides an amazing opportunity to network."
	},
	{
		name: "POONAM GUPTA",
		job: "Alive Home",
		image: "https://www.ecell-iitkgp.org/empresario/wp-content/uploads/images/alivehome.png",
		testimonial:
            "The platform that Empresario provided, helped us make a refined and solid B-model making us think critically about various aspects of business, ranging from technology it's applicability on a massive scale to distribution channels, supply chain, sales teams, key associations etc with the help of a dedicated mentor. Empresario also helped in connecting with the various potential investors, clients and other start-ups, who could help us in growing at a relatively faster pace."
	},
    {
		name: "MONOSHA BIOTECH",
		job: "Social Enterprise",
		image: "https://www.ecell-iitkgp.org/empresario/wp-content/uploads/images/monosha.jpg",
		testimonial:
        "IIT kharagpur Empresario’2019 was a great platform, where we got another acknowledgement/impetus, which helped us to propel ahead, getting the various pertinent departments in sync with us in our endeavour to shed off the disgraceful stigma of being the “snakebite death capital” of the world. We convey our heartfelt gratitude to IIT kharagpur, for bringing startups like us to the forefront, and help solve major social issues."
	}
];
let i = 0; // current slide
let j = testimonials.length; // total slides
let testimonialContainer = document.getElementById("testimonial-container");
function next() {
	i = (j + i + 1) % j;
	displayTestimonial();
}

function prev() {
	i = (j + i - 1) % j;
	displayTestimonial();
}
let displayTestimonial = () => {
	testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
         <img src=${testimonials[i].image}></img>
        <h3>${testimonials[i].name}</h3>
        <h6>${testimonials[i].job}</h6>
        `;
};
window.onload = displayTestimonial;

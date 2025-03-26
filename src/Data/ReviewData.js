import ahsan from "../assets/ahsan.png";
import reza from "../assets/reza.png";
import imani from "../assets/imani.png";

const reviewData = [
  {
    id: 1,
    name: "Ahsan",
    role: "Business Owner",
    image: ahsan,
    title: "MyPdf makes my work look professional, clear, and organized.",
    review:
      "MyPdf allows me to make my work look more professional. I use it daily in my business, I have to, I mean could do my work without it but it would look pretty amateurish. Rather than sending 30 documents separately and relying on clients or suppliers to read or print in the right order, I can put the files together in MyPdf and send the information they need in one PDF. This makes my work look better, clear and organized.",
    rating: 5,
  },
  {
    id: 2,
    name: "Reza",
    role: "Head of Finance",
    image: reza,
    title: "MyPdf helps us to simplify invoice edits and it saves time.",
    review:
      "We use MyPdf to edit invoices, it’s very easy to use and saves us time. We get the invoices as PDFs from a software that doesn't allow us to add or edit all the content we need. The MyPdf editor allows us to make those small changes and add text directly to the PDF without converting, which saves us time. We really like the interface, it's very straightforward. During tax season we also use it to merge files for the tax office, the lawyer, and to get signatures.",
    rating: 5,
  },
  {
    id: 3,
    name: "Imani",
    role: "Project Manager",
    image: imani,
    title: "Streamlining planning applications for faster results",
    review:
      "MyPdf helps us present packages of information in a nice and easy format. For planning applications we have to submit large volumes of information and it’s important to present it in a way that is easy and accessible to whoever is processing the application, because you get the result more quickly. MyPdf helps us prepare applications in a simple way; we can convert all documents to PDF, merge them, add text and compress to submit a single PDF to the council.",
    rating: 5,
  },
];

export default reviewData;

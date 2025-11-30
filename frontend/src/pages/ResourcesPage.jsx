import Header from "../components/SchedulePageHeader";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ListItems from "../components/ResourcesList.jsx";
const ResourcesPage = () => {
  return (
   <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-screen">
        <Header />
        <Section id="schedule" customPadding="py-12 lg:py-16">
          <div className="container">
            <h1 className="h2 mb-6">Resources</h1>
            <p className="body-2 text-n-4 mb-8">
everything you need </p>

<ListItems></ListItems>
          </div>
        </Section>

        <Footer />
      </div>
       </>

  );
};
export default ResourcesPage;

    /*what is happening at schedule page*/

import Header from "../components/SchedulePageHeader";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ScheduleTable from "../components/ScheduleTable";
        {/*everything in this page coming from components and here we just use them?*/}

const SchedulePage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-screen">
        <Header />
        <Section id="schedule" customPadding="py-12 lg:py-16">
          <div className="container">
            <h1 className="h2 mb-6">Course Schedule</h1>
            <p className="body-2 text-n-4 mb-8">
table of term           
 </p>

            <ScheduleTable />
          </div>
        </Section>

        <Footer />
      </div>
    </>
  );
};

export default SchedulePage;

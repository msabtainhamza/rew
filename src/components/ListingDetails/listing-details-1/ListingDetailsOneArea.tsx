"use client";
import NiceSelect from "@/ui/NiceSelect";
import MediaGallery from "./MediaGallery";
import Review from "@/components/inner-pages/agency/agency-details/Review";
import Sidebar from "./Sidebar";
import CommonBanner from "../listing-details-common/CommonBanner";
import CommonPropertyOverview from "../listing-details-common/CommonPropertyOverview";
// import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList";
// import CommonAmenities from "../listing-details-common/CommonAmenities";
import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour";
// import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan";
// import CommonNearbyList from "../listing-details-common/CommonNearbyList";
// import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty";
// import CommonProPertyScore from "../listing-details-common/CommonProPertyScore";
// import CommonLocation from "../listing-details-common/CommonLocation";
import CommonReviewForm from "../listing-details-common/CommonReviewForm";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { fetchIndiviualPropertyData } from "@/services/api";
import Map from "./Map";
// import { IoIosBed } from "react-icons/io";
// import {
//   IoWater,
//   IoScale,
//   IoPhonePortrait,
//   IoThermometer,
//   IoConstruct,
//   IoFlash,
//   IoWaterOutline,
// } from "react-icons/io5";
// import {
//   IoHomeOutline,
//   IoShirtOutline,
//   IoLayersOutline,
// } from "react-icons/io5";
// import { IoBusinessOutline, IoInformationCircleOutline } from "react-icons/io5";
// import DesciptionPoints from "./descriptionPoints";
import DistinctiveOtherFee from "./DistinctiveOtherFee";
import GarageParkings from "./GrageParking";
import Utilities from "./Utilities";
// import OtherFeatures from "./OtherFeatures";
import MoreFeatures from "./MoreFeatures";
import ListingHistory from "./ListingHistory";
import RoomInfoTable from "./RoomInfoTable";
import ComparableHomes from "./ComparableHomes";
import ListingInformation from "./ListingInformation";
import Nearby from "./Nearby";
import WalkScore from "./WalkScore";

type AnyObject = Record<string, any>;

const ListingDetailsOneArea = () => {
  const [propertyData, setpropertyData] = useState<AnyObject>({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  // const params = useSearchParams();
  // const key: any = params.get("id");

  // useEffect(() => {
  //   const fetchIndiviualProperty = async () => {
  //     try {
  //       const data = await fetchIndiviualPropertyData(key);
  //       console.log("property Data", data);
  //       setpropertyData(data);
  //       //   const nonEmptyRoomTypes = data?.filter(
  //       //     (item: any) => item?.RoomType && item?.RoomType?.length > 0
  //       //   );
  //       //   console.log("nonEmptyRoomTypes", nonEmptyRoomTypes);
  //     } catch (error) {
  //       console.log(error);
  //       setError("Failed to fetch property data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchIndiviualProperty();
  // }, [key]);

  // console.log("propertyData", propertyData);

  // if (loading) {
  //   return <div className="loading-spinner">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="error-message">{error}</div>;
  // }

  const selectHandler = (e: any) => {};

  return (
    <div className="listing-details-one theme-details-one bg-[#F8F8F8] md:px-5 px-2  bg-pink pt-180 lg-pt-150 pb-150 xl-pb-120">
      <div className="container md:px-5 px-2">
        <div className="md:w-[95%] w-full m-auto">
          <CommonBanner data={propertyData} />
          {/* -images ? */}
          <MediaGallery />
          <CommonPropertyOverview data={propertyData} />
        </div>
        <div className="md:flex justify-between items-start md:w-[90%] my-3 w-full m-auto">
          <div className="md:w-[70%] w-full">
            <div className="mb-50 bg-white shadow-lg  rounded-[18px] py-[50px] px-[35px] md:block hidden">
              <h4 className="mb-10 text-4xl fw-regular font-abhaya">
                Desription
              </h4>
              <p className="font-lato md:text-[20px] text-[14px] text-[#4d4d4d]">
                Stunning Executive Home! Situated On A Stunning Ravine Lot
                Overlooking A Tranquil Pond, Located In The Sought-After Credit
                Valley Community, Two Primary Suites, Perfect Layout For Large
                Or Growing Families, Enter Stately Double Doors And Be Greeted
                By An Elegant Foyer Opening Up To A Spacious Open Concept
                Layout, Family Room With Soaring Vaulted Ceiling, Cozy Gas
                Fireplace. Beautiful Designer Kitchen Includes Luxury Built-In
                Appliances, Walk-In Pantry, Quartz Countertops With Custom
                Backsplash. A Perfect Spot To Relax! This spectacular home
                simply must be seen!
              </p>
            </div>

            <ListingHistory propertyData={propertyData} />
            <div className=" bg-white shadow-lg rounded-[18px] md:py-[20px] md:px-[35px] px-[20px] py-[20px] mt-10">
              {/* DistinctiveOtherFee */}
              <ListingInformation propertyData={propertyData} />
              {/* <DistinctiveOtherFee propertyData={propertyData} /> */}

              {/* Garage & Parkings */}
              {/* <GarageParkings propertyData={propertyData} /> */}
              {/* <div className="mt-10">
                     <p className="fw-semibold text-dark fs-4 border-bottom border-1 border-dark">Garage & Parkings</p>
                     <div className="d-flex mt-10 gap-3 flex-wrap align-items-start bg-white p-3 rounded-2 justify-content-between" >

                        <div className="d-flex flex-column align-items-center border-end border-1 pe-3 border-dark">
                           <p className="fw-medium m-0 text-dark d-flex align-items-center gap-1"><IoIosBed className="text-secondary" /> Garages</p>
                           <p className="">{propertyData?.GarageParkingSpaces || '-'}</p>
                        </div>

                        <div className="d-flex flex-column align-items-center border-end border-1 pe-3 border-dark">
                           <p className="fw-medium m-0 text-dark d-flex align-items-center gap-1"><IoIosBed className="text-secondary" /> Garage type</p>
                           <p className="">{propertyData?.GarageType || '-'}</p>
                        </div>

                        <div className="d-flex flex-column align-items-center border-end border-1 pe-3 border-dark">
                           <p className="fw-medium m-0 text-dark d-flex align-items-center gap-1"><IoIosBed className="text-secondary" /> Garage Parkings</p>
                           <p className="">{propertyData?.GarageParkingSpaces || '-'}</p>
                        </div>

                        <div className="d-flex flex-column align-items-center border-end border-1 pe-3 border-dark">
                           <p className="fw-medium m-0 text-dark d-flex align-items-center gap-1"><IoIosBed className="text-secondary" /> Driveway
                              Parkings</p>
                           <p className="">{'-'}</p>
                        </div>

                        <div className="d-flex flex-column align-items-center border-end border-1 pe-3 border-dark">
                           <p className="fw-medium m-0 text-dark d-flex align-items-center gap-1"><IoIosBed className="text-secondary" /> Total
                              Parkings</p>
                           <p className="">{propertyData?.ParkingTotal || '-'}</p>
                        </div>

                     </div>
                  </div> */}

              {/* Utilities */}
              {/* <Utilities propertyData={propertyData} /> */}

              {/* Other features */}
              {/* <OtherFeatures propertyData={propertyData} /> */}

              {/* Mor features */}
              {/* <MoreFeatures propertyData={propertyData} /> */}

              {/* room info */}
              {/* <RoomInfoTable /> */}
            </div>

            {/* <div className="property-feature-accordion mt-10 bg-white shadow4 border-20 p-40 mb-50">
                     <h4 className="mb-20">Property Features</h4>
                     <p className="fs-20 lh-lg">- features?</p>
                     <div className="accordion-style-two mt-45">
                        <CommonPropertyFeatureList data={propertyData} />
                     </div>
                  </div> */}

            {/* <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
                     <CommonAmenities data={propertyData} />
                  </div> */}
            <div className="property-video-tour my-5">
              <CommonPropertyVideoTour data={propertyData} />
            </div>
            <div className="my-5">
              <ComparableHomes />
            </div>
            <div className="my-5">
              <Map />
            </div>
            <div className="my-5">
              <Nearby />
            </div>
            <div className="my-5">
              <WalkScore />
            </div>
            {/* <CommonPropertyFloorPlan style={false} />
                  <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
                     <CommonNearbyList />
                  </div>
                  <CommonSimilarProperty />
                  <div className="property-score bg-white shadow4 border-20 p-40 mb-50">
                     <CommonProPertyScore />
                  </div>
                  <div className="property-location mb-50">
                     <CommonLocation />
                  </div> */}

            <div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
              <div className="position-relative z-1">
                <div className="d-sm-flex justify-content-between align-items-center mb-10">
                  <h4 className="m0 xs-pb-30">Reviews</h4>
                  <NiceSelect
                    className="nice-select"
                    options={[
                      { value: "01", text: "Newest" },
                      { value: "02", text: "Best Seller" },
                      { value: "03", text: "Best Match" },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name=""
                    placeholder=""
                  />
                </div>
                <Review style={true} />
              </div>
            </div>
            <CommonReviewForm />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsOneArea;

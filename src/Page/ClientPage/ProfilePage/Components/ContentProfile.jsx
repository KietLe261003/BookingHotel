import React, { useState } from 'react';
import InformationBio from "./InformationBio";
import FillterProfile from "./FillterProfile";
import InfomationUser from "./InfomationUser";
import ListItemProfile from "./ListItemProfile";
const ContentProfile = () => {
    const listTab = [
        'Thông tin cá nhân',
        'Lịch sử booking',
        'Blog',
        'Ưu đãi',
        'Yêu thích',
      ];
      const [openTab, setOpenTab] = useState(listTab[0]);
      const renderContent=()=>{
        switch (openTab) {
            case listTab[0]:
                return <InformationBio/>
            case listTab[1]:
                return <ListItemProfile/>
            default:
                return <InformationBio/>
        }
      }
    return (
        <section className='py-16 '>
          <div className='mx-auto px-4'>
            <div className='flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg '>
              <div className='px-6'>
                <InfomationUser/>
                <FillterProfile openTab={openTab} setOpenTab={setOpenTab} listTab={listTab}/>
                <div className='py-10 text-center'>
                  <div className='flex flex-wrap justify-center'>
                    <div className='w-full lg:w-9/12 px-3'>
                        {renderContent()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
    );
};

export default ContentProfile;
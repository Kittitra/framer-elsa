import React from 'react'
import IntroductImg from '../assets/img/introductImg.jfif'
import "../App.css";
import Marquee from './marquee-text/marquee';

const Introduct = () => {
  return (
    <>
      <div className='px-[19rem] py-[12rem] flex flex-col items-center w-full gap-[5rem]'>
        <div className='flex flex-row justify-between items-end w-full'>
          <h1 className='text-7xl font-bold w-[35rem] flex flex-col'>
            <span>ELSA</span>
            The SnowQueen And Fifthspirit
          </h1>
          <div>
            <img src={IntroductImg} alt="ElsaIcon" width={250} />
          </div>
        </div>

        <div className='flex flex-col text-xl gap-[2rem] w-[60rem]'>
            <p >
              เอลซ่าถูกสอนให้ซ่อนพลังของเธอไว้ เพราะผู้คนรอบตัวกลัวว่าพลังของเธอจะเป็นอันตราย ทำให้เธอเติบโตมาพร้อมกับความกลัวและความรู้สึกโดดเดี่ยว จนกระทั่งเกิดเหตุการณ์ที่เธอเผลอปล่อยพลังออกมาในวันที่ขึ้นครองราชย์ และหนีออกจากเมืองไปสร้างวังน้ำแข็งกลางภูเขา เรื่องราวใน Frozen จึงไม่ใช่แค่การผจญภัยเพื่อกู้คืนฤดูร้อนให้แอเรนเดล แต่ยังเป็นการเดินทางค้นหาความหมายของการยอมรับตัวเองและความรักแท้
            </p>

            <p className='text-right'>
              เอลซ่าเป็นตัวแทนของคนที่แตกต่าง ผู้ที่ต้องต่อสู้กับความกลัวภายในใจ และเรียนรู้ที่จะควบคุมสิ่งที่เคยเป็นภาระให้กลายเป็นพลังที่มีประโยชน์ เธอแสดงให้เห็นว่า ความรัก ความเข้าใจ และการยอมรับในตนเองสามารถเปลี่ยนแปลงชีวิตได้ นอกจากนี้ เพลง "Let It Go" ที่เอลซ่าร้องในเรื่อง ยังกลายเป็นสัญลักษณ์ของอิสรภาพและการปลดปล่อยตัวเองจากข้อจำกัดของสังคม
            </p>
        </div>
      </div>

      <div className='w-full h-fit flex flex-col justify-center overflow-hidden relative'>
        <Marquee title='fifth spirit' direction='left' />
        <Marquee title='ELSA' direction="right" />
        <Marquee title='snowqueen' direction='left' />
      </div>
      
    </>
  )
}

export default Introduct
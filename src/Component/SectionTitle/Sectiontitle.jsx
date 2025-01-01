

export const Sectiontitle = ({heading,subheading}) => {
  return (
    <div className="md:w-3/12 mx-auto text-center my-8">
     <p className="text-sm text-yellow-600 italic mb-2"
     >--{subheading}--</p>
     <h3 
     className="text-3xl font-bold uppercase border-y-4 py-4">{heading}</h3>

    </div>
  )
}

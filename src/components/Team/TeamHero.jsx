const TeamHero = () => {
    return (
        <div className="flex flex-col gap-4 py-10 md:flex-row md:h-[800px] xl:h-[1200px]">
            <div className="md:w-1/2 h-full">
                <img className="h-full w-full object-cover" src="/images/team1.jpg" alt="" />
            </div>
            <div className="flex flex-col gap-4 md:w-1/2 h-full">
                <div className="flex w-full gap-4 h-1/2">
                    <img className="w-1/2 h-full object-cover" src="/images/team2.jpg" alt="" />
                    <img className="w-1/2 h-full object-cover" src="/images/team2.jpg" alt="" />
                </div>
                <div className="flex w-full gap-4 h-1/2">
                    <img className="w-1/2 h-full object-cover" src="/images/team2.jpg" alt="" />
                    <img className="w-1/2 h-full object-cover" src="/images/team2.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default TeamHero;

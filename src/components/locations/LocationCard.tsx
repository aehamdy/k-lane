import Heading from "@/components/common/Heading";
import Image from "next/image";
import Icon from "@/components/common/Icon";
import { Location } from "@/data/locations";
import Link from "next/link";

interface LocationCardProps {
  location: Location;
}

function LocationCard({ location }: LocationCardProps) {
  return (
    <article className="rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full ">
        <div className="lg:w-[563px] h-[400px] lg:h-[612px] overflow-hidden">
          <Image
            src={location.image}
            alt={`${location.city} location`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between gap-3xl p-xl lg:p-9xl text-dark bg-light">
          <div className="flex flex-col gap-base">
            <div className="">
              <p className="text-deep">{location.country}</p>

              <Heading
                level={4}
                className="font-bold text-3xlarge lg:text-4xlarge"
              >
                {location.city}
              </Heading>
            </div>

            <ul className="flex flex-col gap-compact">
              <li className="flex items-center gap-2">
                <div className="">
                  <Icon name="mapPin" />
                </div>

                <div className="">
                  <address>{location.address}</address>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <div className="">
                  <Icon name="clock" />
                </div>

                <div className="">
                  <address>{location.hours}</address>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <div className="">
                  <Icon name="phone" />
                </div>

                <div className="">
                  <address>{location.phone}</address>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <div className="">
                  <Icon name="mail" />
                </div>

                <div className="">
                  <address>{location.email}</address>
                </div>
              </li>
            </ul>
          </div>

          <div className="">
            <Link
              href={location.mapLocation}
              className="flex justify-center items-center py-compact px-regular font-bold hover:text-brand-secondary border border-deep rounded-pill duration-slow"
            >
              View on maps
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default LocationCard;

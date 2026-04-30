import { CATEGORY_CONFIG } from "@/config";
import { listMedia } from "@/modules/media/services/listMedia.service";

import { connectMongoDB } from "@/infra/database/mongodb";
import { UserModel } from "@/auth/user.model";
import bcrypt from "bcryptjs";

export default async function HomePage() {
  await connectMongoDB();

  const hashedPassword = await bcrypt.hash("123456", 10);

  await UserModel.create({
    name: "Admin",
    email: "admin@site.com",
    password: hashedPassword,
    role: "admin",
  });

  console.log("Admin criado");

  const categories = Object.keys(CATEGORY_CONFIG);

  const sections = await Promise.all(
    categories.map(async (category) => {
      const { mediaList } = await listMedia({
        category,
        searchParams: {
          sort: "recent",
          page: "1",
        },
      });

      return {
        category,
        mediaList: mediaList.slice(0, 5),
      };
    }),
  );

  return (
    <main>
      {sections.map(({ category, mediaList }) => {
        const config =
          CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];

        return (
          <section key={category}>
            <h2>{config.label}</h2>

            <div>
              {mediaList.map((media) => (
                <MediaCard
                  key={media._id}
                  title={media.title}
                  slug={media.slug}
                  cover={media.cover}
                  category={media.category}
                />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

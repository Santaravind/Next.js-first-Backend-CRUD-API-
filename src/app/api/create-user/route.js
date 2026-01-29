import { NextResponse } from "next/server";
import { users } from "../routing/route";

export async function POST(request) {
  try {
    const { name, title } = await request.json();

    if (!name || !title) {
      return NextResponse.json(
        {
          success: false,
          message: "Name or title not provided properly",
        },
        { status: 400 }
      );
    }

    const exists = users.find((user) => user.name === name);

    if (exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Data already exists",
        },
        { status: 400 }
      );
    }

    const newUser = {
      id: users.length + 1,
      name,
      title,
    };

    users.push(newUser);

    return NextResponse.json(
      {
        success: true,
        data: users,
      },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Data not saved properly",
      },
      { status: 500 }
    );
  }
}

﻿// <auto-generated />
using System;
using EShopping.Core.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EShopping.Core.Migrations
{
    [DbContext(typeof(EShoppingDbContext))]
    [Migration("20230122191106_UpdateProductSchema")]
    partial class UpdateProductSchema
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("EShopping.Core.Domain.Entities.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("OrderDate")
                        .HasMaxLength(10)
                        .HasColumnType("datetime2")
                        .HasColumnName("OrderDate");

                    b.Property<string>("ShippingAdress")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(true)
                        .HasColumnType("nvarchar(100)")
                        .HasColumnName("ShippingAdress");

                    b.Property<Guid?>("TrackingNumber")
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("TrackingNumber");

                    b.HasKey("Id");

                    b.HasIndex("TrackingNumber")
                        .IsUnique()
                        .HasFilter("[TrackingNumber] IS NOT NULL");

                    b.ToTable("Orders", (string)null);
                });

            modelBuilder.Entity("EShopping.Core.Domain.Entities.OrderItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("Id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("OrderId")
                        .HasColumnType("int");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("ProductName");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.ToTable("OrderItems", (string)null);
                });

            modelBuilder.Entity("EShopping.Core.Domain.Entities.OrderItem", b =>
                {
                    b.HasOne("EShopping.Core.Domain.Entities.Order", null)
                        .WithMany("OrderItems")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.OwnsOne("EShopping.Core.Domain.ValueObjects.Price", "Price", b1 =>
                        {
                            b1.Property<int>("OrderItemId")
                                .HasColumnType("int");

                            b1.Property<int>("Amount")
                                .HasColumnType("int")
                                .HasColumnName("Amount");

                            b1.Property<int>("Unit")
                                .HasColumnType("int")
                                .HasColumnName("Unit");

                            b1.HasKey("OrderItemId");

                            b1.ToTable("OrderItems");

                            b1.WithOwner()
                                .HasForeignKey("OrderItemId");
                        });

                    b.Navigation("Price")
                        .IsRequired();
                });

            modelBuilder.Entity("EShopping.Core.Domain.Entities.Order", b =>
                {
                    b.Navigation("OrderItems");
                });
#pragma warning restore 612, 618
        }
    }
}

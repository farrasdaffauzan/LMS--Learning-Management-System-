<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Course::create([
            'title' => 'Pengenalan Citilink: Maskapai Penerbangan Terjangkau di Indonesia',
            'description' => 'Dalam kursus ini, Anda akan mempelajari sejarah dan perkembangan Citilink sebagai maskapai penerbangan berbiaya rendah di Indonesia. Kami akan membahas model bisnis Citilink, bagaimana maskapai ini berhasil menawarkan tarif yang kompetitif sambil tetap menjaga kualitas pelayanan. Anda juga akan menemukan informasi tentang berbagai rute yang dilayani, armada pesawat yang digunakan, dan bagaimana Citilink berkomitmen untuk memberikan pengalaman terbang yang aman dan nyaman kepada pelanggannya.',
            'video_url' => 'https://www.youtube.com/watch?v=KtgTnoQDGz8',
            'pdf_url' => 'https://drive.google.com/file/d/1m_kv2Z4m05YASAT3RCPQKzDdk2I0hJ7S/view?usp=drive_link',
        ]);
    
        Course::create([
            'title' => 'Pelayanan Pelanggan di Citilink: Menyediakan Pengalaman Terbaik',
            'description' => 'Kursus ini membahas pentingnya pelayanan pelanggan di Citilink dan bagaimana maskapai ini berusaha untuk memberikan pengalaman terbaik kepada penumpang. Anda akan belajar tentang standar pelayanan yang diterapkan, proses check-in yang efisien, dan berbagai layanan tambahan yang ditawarkan. Selain itu, kami juga akan menjelaskan bagaimana Citilink menangani feedback pelanggan dan mengimplementasikan perbaikan berkelanjutan untuk meningkatkan kepuasan pelanggan. Bergabunglah untuk memahami strategi yang diterapkan Citilink dalam menciptakan loyalitas pelanggan.',
            'video_url' => 'https://www.youtube.com/watch?v=fNe5hWA_PtU',
            'pdf_url' => 'https://drive.google.com/file/d/1GsWkxnLRKr_EABRcJwG58lm6wfT98yD8/view?usp=drive_link',
        ]);
    
        Course::create([
            'title' => 'Rute dan Destinasi Populer Citilink: Menjelajahi Indonesia',
            'description' => 'Dalam kursus ini, Anda akan menjelajahi berbagai rute dan destinasi yang dilayani oleh Citilink. Kami akan memberikan panduan mendalam tentang lokasi-lokasi menarik yang bisa Anda kunjungi, mulai dari destinasi wisata alam yang menakjubkan hingga kota-kota besar yang kaya akan budaya. Anda juga akan mempelajari cara merencanakan perjalanan Anda dengan Citilink, termasuk cara mendapatkan penawaran terbaik dan tips perjalanan yang berguna. Kursus ini ideal bagi para traveler yang ingin memanfaatkan layanan Citilink untuk petualangan mereka di Indonesia.',
            'video_url' => 'https://www.youtube.com/watch?v=oORd70kMrZc',
            'pdf_url' => 'https://drive.google.com/file/d/1_IKCZpjRVvqUyJCJYDWq_H7eBmzmqTWr/view?usp=drive_link',
        ]);
    }
}
